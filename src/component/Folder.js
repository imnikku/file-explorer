import { useState } from "react";

const Folder = ({ explorer }) => {
  const [isView, setIsView] = useState(false);
  return (
    <>
      {explorer?.isFolder ? (
        <div style={{ marginTop: "5px" }}>
          <div onClick={() => setIsView(!isView)}>
            <span>
              <img src="./folder.png" className="filesize" /> {explorer.name}
            </span>
          </div>
          <div
            style={{ display: isView ? "block" : "none", paddingLeft: "25px" }}
          >
            {explorer?.items?.map((exp) => {
              return <Folder explorer={exp} />;
            })}
          </div>
        </div>
      ) : (
        <div style={{ marginTop: "5px" }}>
          <span>
            <img src="./file.png" className="filesize" /> {explorer.name}
          </span>
        </div>
      )}
    </>
  );
};
export default Folder;
