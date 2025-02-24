# Course and Trainer Management UI

This repository contains the source code for the user interface of a Course and Trainer Management Application. The UI is designed to be visually appealing, user-friendly, and fully responsive across various devices.

## Overview

This application provides administrators with a comprehensive dashboard to manage courses, trainers, and related payments. The interface has been built using HTML5, CSS3, and React to ensure a modern, interactive experience with smooth transitions and intuitive navigation.

## Routes
src/
└── app/
    ├── auth/
    │   ├── Login
    │   └── layout.jsx      
    └── dashboard/
        ├── courses
        ├── trainers
        ├── link
        ├── payment
        ├── page
        └── layout.js     
        └── loaing.js
    └── components
        ├──charts
        ├── forms
        ├── layout      // sidebar , topbar and routes of sidebard
        ├── shared     // cutom inputs function and style in system
        ├── ui        // shadcn ui components
        ├── page
        └── layout.js     
        └── loaing.js
    └── data            // render table for client side and forms in server action
            └── courses 
                └── constant-data.jsx   //exports arrays of custom forms dialog kooks for add ,edit ,delete , view and colums
                └── courses-table.jsx   //view table and custom hook for add ,edit ,delete ,and view
            └── trainers
                └── constant-data.jsx  
                └── trainers-table.jsx 
            └── link
                └── constant-data.jsx   
                └── link-table.jsx  
            └── payment
                └── constant-data.jsx   
                └── payment-table.jsx  
    └──hooks
            └──custom-dialog.jsx            // custom form for adding inputs 
            └── custom-edit-dialog.jsx
            └── custom-view-dialog.jsx
            └── delete-dialog.jsx
            └── use-search-param-hook.jsx   // export pathname and addquery to searchparams
    └──lib
            └──actions
                └── delete-server.js           //custom funtion handle delete request in servser-side
                └── get-server.js
                └── patch-servser.js
                └── post-servser.js
            └──utils.js                         
            └── validtion.js                    //funtion for validation for data required and pattern 
            └── .env 
                

## Features

- **Responsive Design:** Optimized for both mobile and desktop screens.
- **User Authentication:** Secure login with form validation and error feedback.
- **Dashboard/Home Screen:** Centralized overview displaying key metrics and quick access to functionalities.
- **Courses Management:** View, add, and manage courses with search and filtering capabilities.
- **Trainers Management:** Create, update, and manage trainer profiles.
- **Link Course to Trainer:** Seamlessly assign trainers to specific courses.
- **Payment Management:** Handle trainer payments and view transaction history.
- **Enhanced UI/UX:** Incorporates animations and transitions for a better user experience.

## Screens

### 1. Login Screen
- **Purpose:** Securely authenticate users.
- **Key Elements:** 
  - Username and password fields
  - Validation and error messaging

### 2. Dashboard/Home Screen
- **Purpose:** Provide an overview of system metrics and access points to core functionalities.
- **Key Elements:** 
  - Overview metrics (e.g., number of courses, trainers, payment statistics)
  - Navigation panels

### 3. Courses Management
- **Purpose:** Manage the lifecycle of courses.
- **Key Elements:** 
  - List view of courses with add/search functionalities
  - Detailed course information and management options

### 4. Trainers Management
- **Purpose:** Oversee trainer profiles and related data.
- **Key Elements:** 
  - List view of trainers
  - Options to add, update, or delete trainer records

### 5. Link Course to Trainer
- **Purpose:** Facilitate the assignment of trainers to courses.
- **Key Elements:** 
  - Dropdown or selection interface to link courses and trainers
  - Validation to ensure proper associations

### 6. Payment Management
- **Purpose:** Manage and track trainer payments.
- **Key Elements:** 
  - Payment history and transaction details
  - Interface for processing new payments and issuing refunds

## Technical Stack

- **shadcn , css tailwind** For structuring and styling the user interface.
- **Next js:** For building dynamic and reusable UI components.
- **Responsive Design:** Ensures optimal performance across all device sizes.
- **Git:** Version control for code management and collaboration.

## Installation & Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Khaled-Gammal/courses.git
