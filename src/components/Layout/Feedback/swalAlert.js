import Swal from 'sweetalert2';

const fireAlert = (title, message, icon) => {
  Swal.fire(title, message, icon);
};

const confirmAlert = ({
  title = 'Are you sure?',
  text = "You won't be able to revert this!",
  icon = 'warning',
  showCancelButton = true,
  confirmButtonText = 'Yes, delete it!',
  onConfirm,
}) => {
  Swal.fire({
    title,
    text,
    icon,
    showCancelButton,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText,
  }).then(({ value }) => {
    if (value && onConfirm) {
      onConfirm();
    }
  });
};

export { fireAlert, confirmAlert };
