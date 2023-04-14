import ContentLoader from "react-content-loader";

export const Skeleton = () => (
  <ContentLoader
    className="block_goods"
    speed={2}
    width={300}
    height={550}
    viewBox="0 0 300 550"
    backgroundColor="#f3f3f3"
  >
    <circle cx="149" cy="186" r="100" />
    <rect x="0" y="414" rx="0" ry="0" width="300" height="25" />
    <rect x="0" y="518" rx="0" ry="0" width="300" height="25" />
    <rect x="0" y="450" rx="0" ry="0" width="300" height="57" />
  </ContentLoader>
);

export default Skeleton;
