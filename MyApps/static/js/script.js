const form = document.getElementById("image-form");
const resultDiv = document.getElementById("result");
const captionElement = document.getElementById("caption");
const translatedCaptionElement = document.getElementById("translated-caption");

const fileInput = document.getElementById("image-upload");
const previewDiv = document.getElementById("image-preview");
const previewImg = document.getElementById("preview-img");

const notification = document.getElementById("notification");
const notificationMessage = document.getElementById("notification-message");
const closeNotification = document.getElementById("close-notification");

const loading = document.getElementById("loading");

function showLoading() {
	loading.classList.remove("hidden");
}

function hideLoading() {
	loading.classList.add("hidden");
}

fileInput.addEventListener("change", (event) => {
	const file = event.target.files[0];
	if (file) {
		const reader = new FileReader();
		reader.onload = (e) => {
			previewImg.src = e.target.result;
			previewDiv.classList.remove("hidden");
		};
		reader.readAsDataURL(file);
	} else {
		previewImg.src = "";
		previewDiv.classList.add("hidden");
	}
});

function showNotification(message, type = "info") {
	notification.className =
		"fixed top-4 right-4 z-50 flex items-center gap-x-4 rounded-lg shadow-lg p-4 fade-in " +
		(type === "success" ?
			"bg-green-600 text-white" :
			type === "error" ?
			"bg-red-600 text-white" :
			"bg-blue-600 text-white");

	notificationMessage.textContent = message;
	notification.classList.remove("hidden");

	setTimeout(() => {
		notification.classList.add("fade-out");
		setTimeout(() => {
			notification.classList.add("hidden");
			notification.classList.remove("fade-out");
		}, 500);
	}, 3000);
}

closeNotification.addEventListener("click", () => {
	notification.classList.add("fade-out");
	setTimeout(() => {
		notification.classList.add("hidden");
		notification.classList.remove("fade-out");
	}, 500);
});

form.addEventListener("submit", async (e) => {
	e.preventDefault();
	const fileInput = document.getElementById("image-upload");
	const imageFile = fileInput.files[0];
	if (!imageFile) {
		showNotification("Silakan pilih gambar terlebih dahulu.", "error");
		return;
	}
	const formData = new FormData();
	formData.append("image", imageFile);
	try {
		showLoading();
		const response = await fetch("api/v1/predict/", {
			method: "POST",
			body: formData,
		});
		if (!response.ok) throw new Error("Gagal mengolah gambar.");
		const data = await response.json();
		captionElement.textContent = `Caption: ${data.caption}`;
		translatedCaptionElement.textContent = `Deskripsi Terjemahan: ${data.translated_caption}`;
		resultDiv.classList.remove("hidden");
		showNotification("Gambar berhasil dianalisis!", "success");
	} catch (error) {
		showNotification(`Terjadi kesalahan: ${error.message}`, "error");
	} finally {
		hideLoading();
	}
});