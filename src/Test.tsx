import React, { useState } from "react";

interface Activity {
  id: number;
  title: string;
  content: string;
}

const activities: Activity[] = [
  {
    id: 1,
    title: "created the content",
    content: "the content haha has been created by kaung min khant",
  },
  {
    id: 2,
    title: "updated the content",
    content: "the content haha has been updated by kaung min khant",
  },
  {
    id: 3,
    title: "deleted the content",
    content: "the content haha has been deleted by kaung min khant",
  },
];

const ActivityBox: React.FC<Activity> = ({ id, title, content }) => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  return (
    <div className="p-4 border mb-4 cursor-pointer">
      <div>
        <div
          className="font-bold"
          onClick={() => setIsContentVisible(!isContentVisible)}
        >
          {title}
        </div>

        {isContentVisible && <div className="mt-2">{content}</div>}
      </div>
    </div>
  );
};

const Test: React.FC = () => {
  const [showAllContent, setShowAllContent] = useState(false);
  return (
    <div>
      <div className="flex flex-col items-center mt-10">
        <div className="flex justify-center">
          {activities.map((activity) => (
            <ActivityBox key={activity.id} {...activity} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Test;
