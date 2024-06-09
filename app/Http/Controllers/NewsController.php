<?php

namespace App\Http\Controllers;

use App\Http\Resources\NewsCollection;
use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsController extends Controller
{
    public function index()
    {
        $news = new NewsCollection(News::paginate(5));
        return Inertia::render('Homepage', [
            'title' => 'Gate',
            'description' => 'Welcome to Gate',
            'news' => $news
        ]);
    }

    public function store(Request $request) {

        $news = new News();
        $news->title = $request->title;
        $news->description = $request->description;
        $news->category = $request->category;
        $news->author = auth()->user()->email;
        $news->save();
        return redirect()->back()->with('success', 'News is created!');
    }
}
