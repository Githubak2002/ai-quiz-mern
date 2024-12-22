import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const backend_base_url =
  import.meta.env.MODE === "development"
    ? "http://localhost:8080/api/quiz"
    : "/api/quiz";

const GenerateQuizWithAI = () => {

  const navigate = useNavigate();

  const [topic, setTopic] = useState('');
  const [level, setLevel] = useState('easy');
  const [numberOfQuestions, setNumberOfQuestions] = useState(5);

  const [loading, setLoading] = useState(false); // Loading state

  const createQuiz = async (e) => {
    e.preventDefault();
    setLoading(true); 
    try {
      const response = await axios.post(`${backend_base_url}/createquizusingai`,{
        title: topic,
        level,
        noOfQuestions: numberOfQuestions,
      });
      console.log(response.data);
      // return response.data;.
      navigate('/allquiz')
    } catch (error) {
      console.error('Error creating quiz:', error);
      throw error; 
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex justify-center items-center h-[77vh] bg-gray-100 text-sm">
      <form onSubmit={createQuiz} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="font2 text-2xl font-semibold text-center mb-4 mt-1">Create Quiz wiht AI</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="topic">
            Topic Name
          </label>
          <input
            type="text"
            id="topic"
            value={topic}
            placeholder='Enter a topic '
            onChange={(e) => setTopic(e.target.value)}
            className="mt-3 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-200 h-10"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="numberOfQuestions">
            Number of Questions <span className='text-xs text-red-500'>[Range 3-10]</span>
          </label>
          <input
            type="number"
            id="numberOfQuestions"
            min={3}
            max={10}
            value={numberOfQuestions}
            onChange={(e) => setNumberOfQuestions(e.target.value)}
            className="mt-3 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-200 h-10"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="level">
            Difficulty Level
          </label>
          <select
            id="level"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="mt-3 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-200 h-[]42px"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <button
          type="submit"
          className={`hover-cursorCSS w-full text-white p-2 rounded-md transition duration-200 ${loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'}`}
          disabled={loading} 
        >
          {loading ? 'Creating...' : 'Create Quiz'}
        </button>
      </form>
    </section>
  );
};

export default GenerateQuizWithAI;
