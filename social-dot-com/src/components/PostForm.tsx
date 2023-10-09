import Card from "./Card";

export default function PostForm() {
  return (
    <div className="top-right-section bg-white rounded-xl">
      <Card>
        <div className="p-1">
          <div className="flex mb-3">
            <img
              src="https://cdn.leonardo.ai/users/8ce54492-a389-4438-a971-eeb23f6535c2/generations/10b1a225-2d63-46ea-b175-d2eb79f175dc/DreamShaper_v7_face_looking_at_camera_beautiful_chinese_woman_3.jpg"
              alt="avatar"
              className="rounded-full h-16 mr-2"
            />
            <textarea
              className="pl-1 border rounded-md shadow flex-grow"
              placeholder="What's on your mind?"
              name=""
              id=""
              cols="40"
              rows="2"
            ></textarea>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-4 pl-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="cursor-pointer w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="cursor-pointer w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="cursor-pointer w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                />
              </svg>
            </div>
            <div className="bg-blue-600 hover:bg-blue-500 cursor-pointer text-white rounded-lg px-4 shadow mr-1">
              Post
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
