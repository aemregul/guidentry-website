/* ============================================================
   GUIDENTRY — Form Handling
   ============================================================ */

export function initForms() {
  initPasswordToggles();
  initFileUploads();
  initFormValidation();
}

// --- Password visibility toggle ---
function initPasswordToggles() {
  document.querySelectorAll('.password-toggle').forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const input = toggle.parentElement.querySelector('input');
      if (!input) return;

      const isPassword = input.type === 'password';
      input.type = isPassword ? 'text' : 'password';
      toggle.innerHTML = isPassword ? '🙈' : '👁️';
    });
  });
}

// --- File upload drag & drop ---
function initFileUploads() {
  document.querySelectorAll('.form-input--file').forEach((dropzone) => {
    const input = dropzone.querySelector('input[type="file"]');
    const label = dropzone.querySelector('.file-label');

    ['dragenter', 'dragover'].forEach((event) => {
      dropzone.addEventListener(event, (e) => {
        e.preventDefault();
        dropzone.classList.add('dragover');
      });
    });

    ['dragleave', 'drop'].forEach((event) => {
      dropzone.addEventListener(event, (e) => {
        e.preventDefault();
        dropzone.classList.remove('dragover');
      });
    });

    dropzone.addEventListener('drop', (e) => {
      const files = e.dataTransfer.files;
      if (input && files.length) {
        input.files = files;
        updateFileLabel(label, files[0]);
      }
    });

    dropzone.addEventListener('click', () => {
      if (input) input.click();
    });

    if (input) {
      input.addEventListener('change', () => {
        if (input.files.length && label) {
          updateFileLabel(label, input.files[0]);
        }
      });
    }
  });
}

function updateFileLabel(label, file) {
  if (!label) return;
  label.textContent = file.name;
  label.style.color = 'var(--accent-light)';
}

// --- Basic form validation ---
function initFormValidation() {
  document.querySelectorAll('form[data-validate]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      let isValid = true;

      form.querySelectorAll('[required]').forEach((input) => {
        removeError(input);

        if (!input.value.trim()) {
          showError(input, 'Bu alan zorunludur');
          isValid = false;
        } else if (input.type === 'email' && !isValidEmail(input.value)) {
          showError(input, 'Geçerli bir e-posta adresi girin');
          isValid = false;
        }
      });

      if (!isValid) {
        e.preventDefault();
      }
    });
  });
}

function showError(input, message) {
  input.style.borderColor = '#ef4444';
  input.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.2)';

  const error = document.createElement('span');
  error.className = 'form-error';
  error.textContent = message;
  error.style.cssText = 'display:block;color:#ef4444;font-size:0.8rem;margin-top:6px;';
  
  input.parentElement.appendChild(error);
}

function removeError(input) {
  input.style.borderColor = '';
  input.style.boxShadow = '';
  const error = input.parentElement.querySelector('.form-error');
  if (error) error.remove();
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
