interface Props {
  threadId: string;
  currentUserImage: string;
  currentUserId: string;
}

const Comment = ({ threadId, currentUserImage, currentUserId }: Props) => {
  return (
    <div>
      <h1 className="text-white"> Comment</h1>
    </div>
  );
};

export default Comment;
