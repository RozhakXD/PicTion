from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .captions import generate_caption

# Create your views here.
def index(request):
    return render(request, 'index.html')

@csrf_exempt
def predict(request):
    if request.method == 'POST':
        if 'image' not in request.FILES:
            return JsonResponse(
                {
                    'error': 'Tidak ada gambar yang ditemukan!'
                }
            )
        image = request.FILES['image']
        if not image:
            return JsonResponse(
                {
                    'error': 'Tidak ada gambar yang ditemukan!'
                }
            )
        dict_caption = generate_caption(image)
        return JsonResponse(
            dict_caption
        )
    else:
        return JsonResponse(
            {
                'error': 'Metode permintaan harus POST!'
            }
        )
    
""" Dokumentasi API
# POST /api/v1/predict/

# Request
{
    "image": <image>
}

# Response (Success)
{
    "caption": <caption>,
    "translated_caption": <translated_caption>
}
"""