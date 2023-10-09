import LeftNav from "@/components/LeftNav";
import Card from "@/components/Card";

export default function page() {
  return (
    <div className="flex bg-gray-100 px-2 py-4">
      <LeftNav />
      <div className="right-section w-3/4 m-1"></div>
      <Card>
        <div className="cover-image">
          <img
            src="https://pbs.twimg.com/profile_banners/1553067672237006850/1687965815/1500x500"
            alt="cover-pic"
          />
          <div className="profile-details flex gap-2 pt-4 pl-2">
            <img
              src="https://cdn.leonardo.ai/users/8ce54492-a389-4438-a971-eeb23f6535c2/generations/10b1a225-2d63-46ea-b175-d2eb79f175dc/DreamShaper_v7_face_looking_at_camera_beautiful_chinese_woman_3.jpg"
              alt="pp"
              width="100"
              className="rounded-full"
            />
            <div className="">
              <div className="text-2xl pt-2">Leon</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
