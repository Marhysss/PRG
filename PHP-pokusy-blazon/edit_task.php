<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header('Location: login.php');
    exit;
}

require 'includes/db_connect.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $task_id = $_POST['task_id'];
    $title = $_POST['title'];
    $description = $_POST['description'];
    $due_date = $_POST['due_date'];
    $priority = $_POST['priority'];

    $stmt = $connection->prepare("UPDATE tasks SET title = ?, description = ?, due_date = ?, priority = ? WHERE id = ? AND user_id = ?");
    $stmt->bind_param("ssssii", $title, $description, $due_date, $priority, $task_id, $_SESSION['user_id']);

    if ($stmt->execute()) {
        header('Location: index.php');
        exit;
    } else {
        echo "Chyba při úpravě úkolu.";
    }

    $stmt->close();
} else {
    $task_id = $_GET['id'];
    $stmt = $connection->prepare("SELECT * FROM tasks WHERE id = ? AND user_id = ?");
    $stmt->bind_param("ii", $task_id, $_SESSION['user_id']);
    $stmt->execute();
    $result = $stmt->get_result();
    $task = $result->fetch_assoc();
    $stmt->close();
}
?>

<form method="POST" action="edit_task.php">
    <input type="hidden" name="task_id" value="<?php echo $task['id']; ?>">
    <input type="text" name="title" value="<?php echo $task['title']; ?>" required>
    <textarea name="description"><?php echo $task['description']; ?></textarea>
    <input type="date" name="due_date" value="<?php echo $task['due_date']; ?>">
    <select name="priority">
        <option value="low" <?php if ($task['priority'] == 'low') echo 'selected'; ?>>Nízká</option>
        <option value="medium" <?php if ($task['priority'] == 'medium') echo 'selected'; ?>>Střední</option>
        <option value="high" <?php if ($task['priority'] == 'high') echo 'selected'; ?>>Vysoká</option>
    </select>
    <button type="submit">Upravit úkol</button>
</form>