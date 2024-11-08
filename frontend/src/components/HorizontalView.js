import React, { useState, useEffect } from 'react';
import cartoon_1 from '../../src/Assets/Images/cartoon-1.jpg';
import cartoon_2 from '../../src/Assets/Images/cartoon-2.jpg';
import cartoon_3 from '../../src/Assets/Images/cartoon-3.jpg';
import profilePhoto from '../../src/Assets/Images/ratul-1.png';
import {
  FaInfoCircle,
  FaFileAlt,
  FaCommentAlt,
  FaPaperclip,
  FaCalendarAlt,
} from 'react-icons/fa';
import axios from 'axios';
import Swal from 'sweetalert2';
// Modal component for file upload
const AttachmentModal = ({ isOpen, onClose, onFileUpload, initialFiles }) => {
  const [files, setFiles] = useState(initialFiles || []);

  const handleFileChange = event => {
    const selectedFiles = Array.from(event.target.files);
    onFileUpload(selectedFiles);
    setFiles(selectedFiles);
  };

  // Function to handle the API call when the button is clicked
  const handleFileUpload = async () => {
    if (files.length === 0) {
      // alert('Please select files to upload.');
      Swal.fire({
        title: 'Please select!',
        text: 'Please select files to upload.',
        customClass: {
          popup: 'w-72 h-auto p-3',
          title: 'text-sm',
          content: 'text-xs',
          confirmButton:
            'bg-orange-400 text-white px-4 py-1 text-sm rounded-md',
        },
      });
      return;
    }
    const formData = new FormData();
    files.forEach(file => formData.append('files', file));

    try {
      const response = await axios.post(
        'http://localhost:5000/api/attachments/upload',
        // 'https://task-management-backend-phi-three.vercel.app/api/attachments/upload',
        formData
      );
      console.log(response);
      // alert('Files uploaded successfully.');
      Swal.fire({
        title: 'Success!',
        text: 'Files uploaded successfully.',
        customClass: {
          popup: 'w-72 h-auto p-3',
          title: 'text-sm',
          content: 'text-xs',
          confirmButton:
            'bg-orange-400 text-white px-4 py-1 text-sm rounded-md',
        },
      });
      setFiles([]); // Clear files after upload
      onClose();
    } catch (error) {
      console.error('Error uploading files:', error);
      // alert('File upload failed.');
      Swal.fire({
        title: 'Failed!',
        text: 'File upload failed.',
        customClass: {
          popup: 'w-72 h-auto p-3',
          title: 'text-sm',
          content: 'text-xs',
          confirmButton:
            'bg-orange-400 text-white px-4 py-1 text-sm rounded-md',
        },
      });
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-orange-100 p-4 rounded-lg shadow-lg md:w-2/5 w-10/12 border border-orange-400">
          <div className="flex justify-between">
            <h3 className="text-lg font-semibold mb-4">Upload Attachments</h3>
          </div>
          <input type="file" multiple onChange={handleFileChange} />
          <div className="mt-4">
            <h4 className="text-sm font-semibold">Uploaded Files:</h4>
            <ul className="mt-2">
              {files.map((file, index) => (
                <li key={index} className="text-gray-700">
                  {file.name} ({file.type})
                </li>
              ))}
            </ul>
          </div>
          {/* buttons */}
          <div className="flex flex-col md:flex-row justify-end md:gap-4 gap-2">
            <button
              className="mt-4 px-4 py-2 bg-orange-400 hover:bg-orange-500 text-white rounded"
              onClick={handleFileUpload}
            >
              Upload
            </button>
            <button
              className="md:mt-4 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
};

// HorizontalView component
const HorizontalView = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [filesCount, setFilesCount] = useState([]);

  // get total number of file upload
  useEffect(() => {
    // Fetch files from the server
    const fetchFiles = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/attachments/files'
          // 'https://task-management-backend-phi-three.vercel.app/api/attachments/files'
        );
        console.log(response);
        setFilesCount(response.data);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };

    fetchFiles();
    const interval = setInterval(() => {
      fetchFiles();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const cards = [
    {
      profilePhoto: profilePhoto,
      clientName: 'Client Name',
      description: 'Lorem ipsum dolor sit amet...',
      dueDate: '30-12-2022',
      iconCount: { comments: 12, likes: 15, tasks: 25 },
    },
    {
      profilePhoto: profilePhoto,
      clientName: 'Client Name',
      description: 'Lorem ipsum dolor sit amet...',
      dueDate: '30-12-2022',
      iconCount: { comments: 12, likes: 15, tasks: 25 },
    },
    {
      profilePhoto: profilePhoto,
      clientName: 'Client Name',
      description: 'Lorem ipsum dolor sit amet...',
      dueDate: '30-12-2022',
      iconCount: { comments: 12, likes: 15, tasks: 25 },
    },
    {
      profilePhoto: profilePhoto,
      clientName: 'Client Name',
      description: 'Lorem ipsum dolor sit amet...',
      dueDate: '30-12-2022',
      iconCount: { comments: 12, likes: 15, tasks: 25 },
    },
    {
      profilePhoto: profilePhoto,
      clientName: 'Client Name',
      description: 'Lorem ipsum dolor sit amet...',
      dueDate: '30-12-2022',
      iconCount: { comments: 12, likes: 15, tasks: 25 },
    },
    {
      profilePhoto: profilePhoto,
      clientName: 'Client Name',
      description: 'Lorem ipsum dolor sit amet...',
      dueDate: '30-12-2022',
      iconCount: { comments: 12, likes: 15, tasks: 25 },
    },
    {
      profilePhoto: profilePhoto,
      clientName: 'Client Name',
      description: 'Lorem ipsum dolor sit amet...',
      dueDate: '30-12-2022',
      iconCount: { comments: 12, likes: 15, tasks: 25 },
    },
    {
      profilePhoto: profilePhoto,
      clientName: 'Client Name',
      description: 'Lorem ipsum dolor sit amet...',
      dueDate: '30-12-2022',
      iconCount: { comments: 12, likes: 15, tasks: 25 },
    },
    {
      profilePhoto: profilePhoto,
      clientName: 'Client Name',
      description: 'Lorem ipsum dolor sit amet...',
      dueDate: '30-12-2022',
      iconCount: { comments: 12, likes: 15, tasks: 25 },
    },
    {
      profilePhoto: profilePhoto,
      clientName: 'Client Name',
      description: 'Lorem ipsum dolor sit amet...',
      dueDate: '30-12-2022',
      iconCount: { comments: 12, likes: 15, tasks: 25 },
    },
  ];
  const columns = [
    {
      title: 'Incomplete',
      count: cards.length,
      style: 'bg-red-200 text-red-800',
      indicator: 'bg-red-600',
    },
    {
      title: 'To Do',
      count: cards.length,
      style: 'bg-blue-200 text-blue-800',
      indicator: 'bg-blue-600',
    },
    {
      title: 'Doing',
      count: cards.length,
      style: 'bg-yellow-200 text-yellow-800',
      indicator: 'bg-yellow-600',
    },
    { title: 'Under Review', count: cards.length },
    { title: 'Completed', count: cards.length },
    { title: 'Overdue', count: cards.length },
  ];

  const handleAttachmentClick = () => {
    setIsModalOpen(true);
  };

  const handleFileUpload = files => {
    setUploadedFiles(prevFiles => [...prevFiles, ...files]);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="overflow-x-auto whitespace-nowrap w-full h-auto bg-gray-100">
      <div className="flex gap-4 p-4">
        {columns.map((column, index) => (
          <div
            key={index}
            className="w-80 min-w-[320px] bg-gray-200 rounded-lg shadow-lg"
          >
            <div className="p-4 rounded-t-lg flex items-center">
              {/* Left indicator span */}
              <span
                className={`w-5 h-5 rounded-l-full ${column.indicator}`}
              ></span>

              {/* Column title and count */}
              <div className="ml-2 flex justify-between w-full items-center">
                <h3 className="text-lg font-semibold">{column.title}</h3>
                <span className="text-sm font-medium">{column.count}</span>
              </div>
            </div>
            <div className="p-1 space-y-4 overflow-y-scroll h-[500px]">
              {cards.map((card, i) => (
                <div key={i} className="bg-white p-4 rounded-lg shadow-md">
                  <div className="flex justify-between">
                    <div className="flex items-center mb-0">
                      <img
                        src={cartoon_1}
                        alt="Profile"
                        className="w-8 h-8 rounded-full mr-3"
                      />
                      <div>
                        <h4 className="font-semibold text-sm">
                          {card.clientName}
                        </h4>
                      </div>
                    </div>
                    <div className="flex items-center mb-0">
                      <img
                        src={profilePhoto}
                        alt="Profile"
                        className="w-8 h-8 rounded-full mr-3"
                      />
                      <div>
                        <h4 className="font-semibold text-sm">Ratul Hasan</h4>
                      </div>
                    </div>
                  </div>

                  <div className="py-2 flex justify-between items-center text-xs">
                    <div className="flex items-center space-x-2">
                      <FaInfoCircle className="text-gray-500" />
                      <p className="text-xs text-gray-500">
                        {card.description}
                      </p>
                    </div>
                    <div className="flex items-center space-x-1 bg-gray-200 p-1 rounded-md ">
                      <FaFileAlt className="text-gray-500" />
                      <p>1/2</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-gray-500 text-xs">
                    <div className="flex items-center space-x-2">
                      <img
                        src={cartoon_2}
                        alt="Profile"
                        className="w-6 h-6 rounded-full mr-3"
                      />
                      <img
                        src={cartoon_3}
                        alt="Profile"
                        className="w-6 h-6 rounded-full mr-3"
                      />
                      <div className="flex items-center space-x-2">
                        <span className="bg-gray-200 p-1 rounded-3xl">
                          {card.iconCount.comments}+
                        </span>

                        <FaCommentAlt className="text-gray-500" />
                        <span>{card.iconCount.likes}</span>

                        {/* Task/Attachment Button */}
                        <button onClick={handleAttachmentClick}>
                          <FaPaperclip className="text-gray-500" />
                        </button>
                        <span>{filesCount?.length}</span>
                        {/* <span>{card.iconCount.tasks}</span> */}
                      </div>
                      <div className="flex items-center space-x-1">
                        <FaCalendarAlt className="text-gray-500" />
                        <span>{card.dueDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Attachment Modal */}
      <AttachmentModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onFileUpload={handleFileUpload}
        initialFiles={uploadedFiles}
      />
    </div>
  );
};

export default HorizontalView;
