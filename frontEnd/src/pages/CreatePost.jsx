import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getRandomPrompt } from "../helpers/getRandomPrompt";
import FormField from "../components/FormField";
import { InfinitySpin } from "react-loader-spinner";
import { FaRegImage } from "react-icons/fa6";

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: ""
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);
  const HandleSubmit = () => {
    return 0;
  };
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt();
    setForm({ ...form, prompt: randomPrompt });
  };

  const generateImg = () => {
    return true;
  };
  return (
    <section className="ma-w-7xl mx-auto px-7">
      <div>
        <h1 className="font-extrabold text-orange-400 text-[32px] capitalize">
          create new post
        </h1>
      </div>
      <form className="mt-16 max-w-3xl" onSubmit={HandleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Your Name"
            type="text"
            name="name"
            placeholder="John Doe"
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            labelName="prompt"
            type="text"
            name="prompt"
            placeholder="A plush toy robot sitting against a yellow wall"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
          <div className="relative bg-gray-50 border border-gray-300 text-sm rounded-lg w-64 p-3 h-64 flex justify-center items-center">
            {form.photo
              ? <img
                  src={form.photo}
                  alt={form.prompt}
                  className="w-full h-full object-contain"
                />
              : <div className="object-contain opacity-40">
                  <FaRegImage className="size-10" />
                </div>}
            {generatingImg &&
              <div className="absolute inset-0 z-0 flex justify-center items-center">
                <InfinitySpin
                  visible={true}
                  width="200"
                  color="#FFA726"
                  ariaLabel="infinity-spin-loading"
                />
              </div>}
          </div>
        </div>
        <div className="mt-5 flex gap-5">
          <button
            type="button"
            onClick={generateImg}
            className="font-semibold text-xs py-1 px-2 rounded-full bg-orange-400 text-black"
          >
            {generatingImg ? "Generating...." : "Generate"}
          </button>
        </div>
        <div className="mt-10">
          <p className="mt-2 text-[#66e75] text-[14px]">
            You can share your creation with our community.
          </p>
          <button
            type="submit"
            className="font-semibold text-xs py-1 px-2 rounded-full bg-orange-400 text-black mt-5"
          >
            {loading ? "Sharing..." : "Share"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
