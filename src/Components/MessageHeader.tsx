import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { UserProfile } from "../interface/UserState";

const MessageHeader = () => {
  const [selectedUser, setSelectedUser] = useState<UserProfile>();
  const currentRoom = useSelector((state: any) => state.room.currentRoom);
  const userProfile = useSelector((state: any) => state.user.profile);

  useEffect(() => {
    const filteredUser: UserProfile[] =
      currentRoom?.participants?.filter(
        (user: UserProfile) => user._id !== userProfile._id
      ) ?? [];
    setSelectedUser(filteredUser[0]);
  }, [currentRoom, userProfile]);

  return (
    <div>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
          <span>{selectedUser?.displayName}</span>
        </div>
      </header>
    </div>
  );
};

export default MessageHeader;
