"use strict";

// ========================================
// BAKA PORTFOLIO - VIDEO PROJECTS
// ========================================

const videoCategories = [
{
gridId: "animationGrid",
category: "2D Animations",
videos: [
"5ckozf8-7WA",
"p9udcuDrPKQ",
"pv_hs5VXKq0",
"EAIHGcduUyQ",
"d4heRC8wrr0"
]
},
{
gridId: "aiGrid",
category: "AI Transitions",
videos: [
"ru5WMe0LpwY",
"8maYymQ0A9g",
"WHGTimoSiRU",
"nDERRR5bJ5s",
"aQ6M6EwnoI8"
]
},
{
gridId: "editingGrid",
category: "Reels / Editing",
videos: [
"84zPR9Pi6mQ",
"4YU5oGO-TmE",
"mzO-zM7OWVY",
"doNtA_NwN3w",
"hi7ODUfh82I",
"XGkpCX-Ewrg",
"CS0JEg-tffA",
"a8lKStWCtAA",
"30H2D7qpiZA",
"wmZUA3Css-8",
"IZNQjuUU8YE",
"QyB5CqFFFq8"
]
},
{
gridId: "creativeGrid",
category: "Reels / Creative Motions",
videos: [
"cgH8rKMJTow", // Project 01
"12_rv7XaryM", // Project 02
"n8g2StwzHvI", // Project 03
"zDOyDVV533I", // Project 04
"XX3Vc8z0pOM", // Project 05
"gD70S5eBexM", // Project 06
"vMvixJT7AnU", // Project 07
"80Y1gWoeXGw", // Project 08
"G91wsMXDUYc", // Project 09
"R8ATWq92TtQ", // Project 10
"moOO7tyiSuk", // Project 11
"DoRfJc5YgLo", // Project 12
"cxaSZ7ydtTc", // Project 13
"2TKAwlSvXeA", // Project 14 - reel 01_MG
"ZP4wA8qT7uE", // Project 15 - reel 02_MG
"NRK4XyoCcJk", // Project 16
"KpxfFdYLApg", // Project 17
"4u2souOZM8s", // Project 18
"kOz8FQ4VKls", // Project 19
"kINuIRZnsCE", // Project 20
"X9f957rK74s"  // Project 21
]
},
{
gridId: "videosGrid",
category: "Videos",
videos: [
"K4yGChQKZoY",
"vUq2MhdMEg8",
"DnRRHciWZa4",
"KIa9UhDb-Jg",
"C3GF9faa_Z4",
"2hOSFdANZ7U",
"ZXSkSIen9T4",
"Il_-MaTUsZ4"
]
}
];

// ========================================
// CREATE A VIDEO CARD
// ========================================

function createVideoCard(videoId, index, category) {
const card = document.createElement("article");
card.className = "project-card";


const videoContainer = document.createElement("div");
videoContainer.className = "video-container";

const iframe = document.createElement("iframe");

// Standard YouTube embed URL, including support for Shorts
iframe.src = "https://www.youtube.com/embed/" + videoId;
iframe.title = category + " Project " + (index + 1);
iframe.setAttribute("loading", "lazy");
iframe.setAttribute(
    "allow",
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
);
iframe.setAttribute(
    "referrerpolicy",
    "strict-origin-when-cross-origin"
);
iframe.setAttribute("allowfullscreen", "");

videoContainer.appendChild(iframe);

const info = document.createElement("div");
info.className = "project-info";

const title = document.createElement("h3");
title.textContent =
    category + " Project " + String(index + 1).padStart(2, "0");

const description = document.createElement("p");
description.textContent = "Video Editing • Motion Design";

info.appendChild(title);
info.appendChild(description);

card.appendChild(videoContainer);
card.appendChild(info);

return card;


}

// ========================================
// LOAD ALL VIDEO PROJECTS
// ========================================

function loadPortfolioVideos() {
videoCategories.forEach(function (categoryData) {
const grid = document.getElementById(categoryData.gridId);


    if (!grid) {
        console.warn("Grid not found: " + categoryData.gridId);
        return;
    }

    // Avoid adding duplicate cards if this function runs again.
    grid.innerHTML = "";

    categoryData.videos.forEach(function (videoId, index) {
        const card = createVideoCard(
            videoId,
            index,
            categoryData.category
        );

        grid.appendChild(card);
    });
});


}

// ========================================
// UPDATE FOOTER YEAR
// ========================================

function updateFooterYear() {
const yearElement = document.getElementById("year");


if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


}

// ========================================
// START THE PORTFOLIO
// ========================================

document.addEventListener("DOMContentLoaded", function () {
loadPortfolioVideos();
updateFooterYear();
});
