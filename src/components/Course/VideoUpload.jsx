import React, { useState } from "react";

const VideoUpload = () => {
  const [chapters, setChapters] = useState([]);
  const [newChapterName, setNewChapterName] = useState("");
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [videoFormData, setVideoFormData] = useState({
    id: null,
    name: "",
    file: null,
    description: "",
    ppt: null,
    pdf: null,
    quiz: "",
    conclusion: "",
  });

  const handleAddChapter = () => {
    if (!newChapterName.trim()) {
      alert("Chapter name cannot be empty!");
      return;
    }

    const newChapter = {
      id: Date.now(),
      name: newChapterName.trim(),
      sections: [{ id: 1, videos: [], ppt: [], pdf: [], quiz: [], conclusion: "" }],
    };

    setChapters((prevChapters) => [...prevChapters, newChapter]);
    setNewChapterName("");
  };

  const handleAddSection = (chapterId) => {
    const updatedChapters = chapters.map((chapter) => {
      if (chapter.id === chapterId) {
        const newSection = {
          id: chapter.sections.length + 1,
          videos: [],
          ppt: [],
          pdf: [],
          quiz: [],
          conclusion: "",
        };
        return { ...chapter, sections: [...chapter.sections, newSection] };
      }
      return chapter;
    });

    setChapters(updatedChapters);
  };

  const handleFileChange = (e, fieldName) => {
    setVideoFormData((prevData) => ({
      ...prevData,
      [fieldName]: e.target.files[0],
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVideoFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUploadContent = () => {
    if (!videoFormData.name || !videoFormData.file || !videoFormData.description) {
      alert("All fields are required!");
      return;
    }

    const updatedChapters = chapters.map((chapter) => {
      if (chapter.id === selectedChapter.id) {
        const updatedSections = chapter.sections.map((section) => {
          if (section.id === selectedSection.id) {
            const updatedVideos = videoFormData.id
              ? section.videos.map((video) =>
                  video.id === videoFormData.id ? { ...videoFormData } : video
                )
              : [
                  ...section.videos,
                  { ...videoFormData, id: Date.now(), file: videoFormData.file.name },
                ];

            return {
              ...section,
              videos: updatedVideos,
              ppt: videoFormData.ppt ? [...section.ppt, videoFormData.ppt.name] : section.ppt,
              pdf: videoFormData.pdf ? [...section.pdf, videoFormData.pdf.name] : section.pdf,
              quiz: videoFormData.quiz ? [...section.quiz, videoFormData.quiz] : section.quiz,
              conclusion: videoFormData.conclusion || section.conclusion,
            };
          }
          return section;
        });

        return { ...chapter, sections: updatedSections };
      }
      return chapter;
    });

    setChapters(updatedChapters);
    setShowUploadForm(false);
    setVideoFormData({
      id: null,
      name: "",
      file: null,
      description: "",
      ppt: null,
      pdf: null,
      quiz: "",
      conclusion: "",
    });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow rounded-lg p-6 space-y-4">
        {/* Add Chapter */}
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="New Chapter Name"
            value={newChapterName}
            onChange={(e) => setNewChapterName(e.target.value)}
            className="p-2 border rounded-md flex-1"
          />
          <button
            onClick={handleAddChapter}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Add Chapter
          </button>
        </div>

        {/* Chapter List */}
        {chapters.map((chapter) => (
          <div key={chapter.id} className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{chapter.name}</h3>
              <button
                onClick={() => handleAddSection(chapter.id)}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              >
                Add Section
              </button>
            </div>

            {/* Section List */}
            {chapter.sections.map((section) => (
              <div key={section.id} className="space-y-2">
                <h4 className="text-md font-medium">Section {section.id}</h4>
                <button
                  onClick={() => {
                    setSelectedChapter(chapter);
                    setSelectedSection(section);
                    setShowUploadForm(true);
                  }}
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                >
                  Add Content
                </button>
              </div>
            ))}
          </div>
        ))}

        {/* Upload Form */}
        {showUploadForm && (
          <div className="bg-gray-100 p-4 rounded-md">
            <h3 className="text-lg font-medium">
              {videoFormData.id ? "Edit" : "Add"} Content for {selectedChapter.name}, Section{" "}
              {selectedSection.id}
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Content Name</label>
                <input
                  type="text"
                  name="name"
                  value={videoFormData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Video File</label>
                <input
                  type="file"
                  accept="video/*"
                  onChange={(e) => handleFileChange(e, "file")}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">PPT</label>
                <input
                  type="file"
                  accept=".ppt,.pptx"
                  onChange={(e) => handleFileChange(e, "ppt")}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">PDF</label>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={(e) => handleFileChange(e, "pdf")}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Quiz (Text)</label>
                <input
                  type="text"
                  name="quiz"
                  value={videoFormData.quiz}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Conclusion</label>
                <textarea
                  name="conclusion"
                  value={videoFormData.conclusion}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <button
                onClick={handleUploadContent}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              >
                {videoFormData.id ? "Update" : "Upload"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoUpload;



