import { useState } from "react";
import ReactQuillNew from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
const AddNewPost = () => {
    const [value, setValue] = useState('');
    const [formData, setFormData] = useState({
        title: "",
        slug: "",
        tags: "",
        categories: "",
        content: "",
        seoTitle: "",
        seoDescription: "",
        status: "draft",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Post Data Submitted:", formData);
    };

    return (
        <>
            <div className="p-4 border-b-2 border-solid border-gray-100">
                <h1 className="text-lg font-semibold">Add New Post</h1>
                <p>Welcome to the admin dashboard.</p>
            </div>
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 xl:w-2/3 p-4">
                    <div class="w-full">
                        <form>
                            <div class="mb-5">
                                <label for="name" class="mb-3 block text-base font-medium text-gray-700">
                                    Title
                                </label>
                                <input type="text" name="name" id="name" placeholder="Post Title"
                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                            <div class="mb-5">
                                <label for="phone" class="mb-3 block text-base font-medium text-gray-700">
                                    Phone Number
                                </label>
                                <input type="text" name="phone" id="phone" placeholder="Enter your phone number"
                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                            <div class="mb-5">
                                <label for="email" class="mb-3 block text-base font-medium text-gray-700">
                                    Content
                                </label>
                                <ReactQuillNew theme="snow" value={value} onChange={setValue} />
                            </div>
                            <div class="mb-5">
                                <label for="email" class="mb-3 block text-base font-medium text-gray-700">
                                    Email Address
                                </label>
                                <input type="email" name="email" id="email" placeholder="Enter your email"
                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                            <div class="-mx-3 flex flex-wrap">
                                <div class="w-full px-3 sm:w-1/2">
                                    <div class="mb-5">
                                        <label for="date" class="mb-3 block text-base font-medium text-gray-700">
                                            Date
                                        </label>
                                        <input type="date" name="date" id="date"
                                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                    </div>
                                </div>
                                <div class="w-full px-3 sm:w-1/2">
                                    <div class="mb-5">
                                        <label for="time" class="mb-3 block text-base font-medium text-gray-700">
                                            Time
                                        </label>
                                        <input type="time" name="time" id="time"
                                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                    </div>
                                </div>
                            </div>

                            <div class="mb-5 pt-3">
                                <label class="mb-5 block text-base font-semibold text-gray-700 sm:text-xl">
                                    Address Details
                                </label>
                                <div class="-mx-3 flex flex-wrap">
                                    <div class="w-full px-3 sm:w-1/2">
                                        <div class="mb-5">
                                            <input type="text" name="area" id="area" placeholder="Enter area"
                                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                        </div>
                                    </div>
                                    <div class="w-full px-3 sm:w-1/2">
                                        <div class="mb-5">
                                            <input type="text" name="city" id="city" placeholder="Enter city"
                                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                        </div>
                                    </div>
                                    <div class="w-full px-3 sm:w-1/2">
                                        <div class="mb-5">
                                            <input type="text" name="state" id="state" placeholder="Enter state"
                                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                        </div>
                                    </div>
                                    <div class="w-full px-3 sm:w-1/2">
                                        <div class="mb-5">
                                            <input type="text" name="post-code" id="post-code" placeholder="Post Code"
                                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <button
                                    class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                    Book Appointment
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-full p-4 xl:w-1/3">
                    <h3 className="font-semibold text-gray-700">Post Details</h3>
                    <form className="h-52 rounded-md mt-2 shadow-md ">
                        {value}
                    </form>
                </div>
            </div>

        </>
    );
};

export default AddNewPost;
