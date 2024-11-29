import { avaterImage } from "../util/imageShow";
import defaultImage from "./../assets/user.png";
const AvterImage = ({
  alt = "User Avatar",
  src,
  fallback = defaultImage,
  size = 40,
  className = "",
  crossOrigin = "anonymous",
}) => {
  return (
    <div
      className={`inline-block rounded-full overflow-hidden bg-gray-200 ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src={src ? avaterImage(src) : fallback}
        alt={alt}
        className="object-cover w-full h-full"
        crossOrigin={crossOrigin}
        // onError={(e) => (e.target.src = fallback)} // Handle broken images
      />
    </div>
  );
};

export default AvterImage;
