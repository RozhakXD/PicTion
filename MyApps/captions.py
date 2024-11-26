from huggingface_hub import InferenceClient
from googletrans import Translator

# Ganti 'your_hf_access_token' dengan token akses Anda
client = InferenceClient(model="Salesforce/blip-image-captioning-base", token="")
translator = Translator()

def generate_caption(image_path):
    response = client.image_to_text(image=image_path)

    caption = response.generated_text
    translated_caption = translator.translate(caption, src="en", dest="id").text

    return {
        'caption': f'{caption}',
        'translated_caption': f'{translated_caption}'
    }