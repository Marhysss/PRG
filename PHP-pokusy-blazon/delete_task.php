<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header('Location: login.php');
    exit;
}

require 'includes/db_connect.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $task_id = $_POST['task_id'];

    $stmt = $connection->prepare("DELETE FROM tasks WHERE id = ? AND user_id = ?");
    $stmt->bind_param("ii", $task_id, $_SESSION['user_id']);

    if ($stmt->execute()) {
        header('Location: index.php');
        exit;
    } else {
        echo "Chyba při mazání úkolu.";
    }

    $stmt->close();
} else {
    $task_id = $_GET['id'];
}
?>

<form method="POST" action="delete_task.php">
    <input type="hidden" name="task_id" value="<?php echo $task_id; ?>">
    <p>Opravdu chcete smazat tento úkol?</p>
    <button type="submit">Smazat úkol</button>
</form>
