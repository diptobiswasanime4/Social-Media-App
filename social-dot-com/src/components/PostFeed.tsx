import Card from "./Card";

export default function PostFeed() {
  return (
    <div className="bottom-right-section bg-white rounded-xl my-2">
      <Card>
        <div className="p-1">
          <div className="flex mb-3">
            <img
              src="https://cdn.leonardo.ai/users/8ce54492-a389-4438-a971-eeb23f6535c2/generations/10b1a225-2d63-46ea-b175-d2eb79f175dc/DreamShaper_v7_face_looking_at_camera_beautiful_chinese_woman_3.jpg"
              alt="avatar"
              className="rounded-full h-12 mr-2"
            />
            <div className="">
              <div className="">shared a photo</div>
              <div className="text-sm text-gray-500">3 hours ago</div>
            </div>
          </div>
          <div className="mb-2">
            I always follow this advice of Steve Jobs. Always remain foolish to
            learn something new and exciting everyday!
          </div>
          <img
            src="https://pbs.twimg.com/profile_banners/1553067672237006850/1687965815/1500x500"
            alt="steve jobs"
            className="rounded-md"
          />
        </div>
      </Card>
    </div>
  );
}
