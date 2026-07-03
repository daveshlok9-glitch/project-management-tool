const Project = require("../models/Project");
const Task = require("../models/Task");

const getAnalytics = async (req, res) => {
  try {
    const totalProjects = await Project.countDocuments();

    const totalTasks = await Task.countDocuments();

    const todoTasks = await Task.countDocuments({
      status: "To Do",
    });

    const inProgressTasks = await Task.countDocuments({
      status: "In Progress",
    });

    const completedTasks = await Task.countDocuments({
      status: "Done",
    });

    const highPriority = await Task.countDocuments({
      priority: "High",
    });

    const mediumPriority = await Task.countDocuments({
      priority: "Medium",
    });

    const lowPriority = await Task.countDocuments({
      priority: "Low",
    });

    res.json({
      totalProjects,
      totalTasks,
      todoTasks,
      inProgressTasks,
      completedTasks,
      priority: {
        high: highPriority,
        medium: mediumPriority,
        low: lowPriority,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAnalytics,
};