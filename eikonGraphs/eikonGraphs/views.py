from django.shortcuts import render

template = 'home.html'

def graph(request):
    return render(request, template)
