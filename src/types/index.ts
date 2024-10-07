export type Blog = {
  _id: string;
  title: string;
  content: string;
  blogger: Blogger;
  category: string;
  coverImage: string;
  comments: [
    {
      userId: string;
      content: string;
      createdAt: Date;
    }
  ];
  createdAt: Date;
  updatedAt: Date;
};

export type Blogger = {
  name: string;
};

export type HomeProps = {
  blogs: Blog[]; // Array of Blog objects
};
