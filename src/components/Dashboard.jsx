import React, { useState } from "react";
import XPBar from "./XPBar";

const getTodayDate = () => new Date().toISOString().split("T")[0];

const Dashboard = ({ user, onLogout, updateUser }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("");

  const today = getTodayDate();
  const todaysTasks = user.tasks.filter((t) => t.date === today);

  const addTask = () => {
    if (!taskTitle || !time || !duration) return;
    const newTask = {
      id: Date.now(),
      title: taskTitle,
      time,
      duration,
      date: today,
      status: "pending",
    };
    const updated = { ...user, tasks: [...user.tasks, newTask] };
    updateUser(updated);
    setTaskTitle("");
    setTime("");
    setDuration("");
  };

  const completeTask = (id) => {
    const updatedTasks = user.tasks.map((t) =>
      t.id === id ? { ...t, status: "done" } : t
    );
    const xpGain = 10;
    const newXP = user.xp + xpGain;
    let newLevel = user.level;
    let xpNeeded = newLevel * 500;
    if (newXP >= xpNeeded) {
      newLevel += 1;
    }

    const updated = {
      ...user,
      tasks: updatedTasks,
      xp: newXP,
      level: newLevel,
    };
    updateUser(updated);
  };

  const forgiveTask = (id) => {
    const updatedTasks = user.tasks.map((t) =>
      t.id === id ? { ...t, status: "forgiven" } : t
    );
    updateUser({ ...user, tasks: updatedTasks });
  };

  return (
    <div style={{ padding: "1.5rem", fontFamily: "Arial" }}>
      <h2>Welcome, {user.username} (Level {user.level})</h2>
      <button onClick={onLogout}>Logout</button>

      <XPBar xp={user.xp} level={user.level} />

      <h3 style={{ marginTop: "1rem" }}>Add Task</h3>
      <input
        type="text"
        placeholder="Task title"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <input
        type="text"
        placeholder="Duration (e.g. 30 min)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
      <button onClick={addTask} style={{ marginLeft: "1rem" }}>
        Add
      </button>

      <h3 style={{ marginTop: "2rem" }}>Today's Tasks</h3>
      {todaysTasks.length === 0 && <p>No tasks for today.</p>}
      <ul>
        {todaysTasks.map((task) => (
          <li key={task.id} style={{ marginBottom: "0.5rem" }}>
            <b>{task.title}</b> at {task.time} ({task.duration}) –{" "}
            <i>{task.status}</i>
            {task.status === "pending" && (
              <>
                <button onClick={() => completeTask(task.id)} style={{ marginLeft: "0.5rem" }}>
                  Done
                </button>
                <button onClick={() => forgiveTask(task.id)} style={{ marginLeft: "0.5rem" }}>
                  Forgive
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
