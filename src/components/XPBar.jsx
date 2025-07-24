import React from "react";

const XPBar = ({ xp, level }) => {
  const nextLevelXP = level * 500;
  const percent = Math.min((xp / nextLevelXP) * 100, 100);

  return (
    <div style={{ marginTop: "1rem" }}>
      <div style={{ width: "100%", height: "20px", background: "#ddd", borderRadius: "5px" }}>
        <div
          style={{
            width: `${percent}%`,
            height: "100%",
            background: "green",
            borderRadius: "5px",
            transition: "width 0.3s",
          }}
        />
      </div>
      <p>
        XP: {xp} / {nextLevelXP}
      </p>
    </div>
  );
};

export default XPBar;
