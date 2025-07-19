import React from 'react';

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => (
  <div className="mb-4">
    <div className="flex items-center justify-between mb-2">
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-gray-900"
      >
        {labelName}
      </label>

      {isSurpriseMe && (
        <div className="flex items-center">
          <span className="mr-2">Surprise me {'==> '} </span>
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="text-sm bg-gradient-to-r from-[#6469ff] to-[#4b4fad] text-white px-3 py-1 rounded-md transition-all duration-300 focus:outline-none hover:opacity-90"
          >
            Go!
          </button>
        </div>
      )}
    </div>

    <input
      type={type}
      id={name}
      name={name}
      className="bg-gray-100 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3 transition-all duration-300"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
    />
  </div>
);

export default FormField;