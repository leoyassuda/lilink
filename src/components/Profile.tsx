import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Profile: React.FC = () => {
  return (
    <div className="text-center flex flex-col items-center py-2 justify-center justify-items-center ">
      <Avatar className="h-24 w-24">
        <AvatarImage
          height={96}
          width={96}
          src="https://github.com/shadcn.png"
          alt="@leo_yassuda"
        />
        <AvatarFallback>LEO</AvatarFallback>
      </Avatar>
      <h2 className="mt-4 text-2xl font-bold">Leo Yassuda</h2>
      <p className="text-gray-600">@leo_yassuda</p>
    </div>
  );
};

export default Profile;
