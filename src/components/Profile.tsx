import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Profile: React.FC = () => {
  return (
    <div className="text-center grid justify-center justify-items-center">
      <Avatar className="grid align-middle justify-center justify-items-center">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>LEO</AvatarFallback>
      </Avatar>
      <h2 className="mt-4 text-2xl font-bold">Leo Yassuda</h2>
      <p className="text-gray-600">@leo_yassuda</p>
    </div>
  );
};

export default Profile;
