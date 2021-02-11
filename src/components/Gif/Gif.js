const Gif = ({ url, title }) => {
  return (
    <div>
      <h4>{title}</h4>
      <img src={url} alt="gif" />
    </div>
  );
};

export default Gif;
