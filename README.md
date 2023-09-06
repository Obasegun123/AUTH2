# Project Title: ASP.NET Core MVC Identity Extension

## Table of Contents

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
3. [Usage](#usage)
   - [Authentication](#authentication)
   - [Role Management](#role-management)
   - [Extended User Fields](#extended-user-fields)
   - [Profile Photo](#profile-photo)
4. [Configuration](#configuration)
5. [Contributing](#contributing)
6. [License](#license)

## Introduction

The ASP.NET Core MVC Identity Extension is an open-source solution designed to extend the functionality of ASP.NET Core Identity MVC classes. This project adds features such as authentication, role management, extended user fields, and profile photo functionality to your ASP.NET Core application.

## Getting Started

### Prerequisites

Before using this extension, make sure you have the following prerequisites:

- [.NET Core SDK](https://dotnet.microsoft.com/download)
- [Visual Studio](https://visualstudio.microsoft.com/) or [Visual Studio Code](https://code.visualstudio.com/)
- SQL Server or another compatible database for Entity Framework

### Installation

To install the ASP.NET Core MVC Identity Extension, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/richardnwonah/AEII/blob/main/README.md
   ```

2. Open the solution in your preferred development environment (e.g., Visual Studio).

3. Configure your database connection string in the `appsettings.json` file.

4. Build and run the application.

## Usage

### Authentication

To enable authentication using this extension, follow these steps:

1. Register and configure the Identity Server.

2. Use the provided authentication endpoints and methods in your controllers and views.

### Role Management

This extension allows you to manage roles easily:

1. Use the `RoleManager` to create, update, and delete roles.

2. Assign roles to users using the `UserManager`.

### Extended User Fields

You can add custom fields to user profiles:

1. Use the `ExtendedUser` class to define additional user properties.

2. Extend registration and profile management forms to capture and display these fields.

### Profile Photo

To enable profile photo functionality:

1. Implement a file upload feature for users to upload profile photos.

2. Store user profile photos in a secure location and associate them with user profiles.

## Configuration

The project configuration is primarily done through the `appsettings.json` file. Customize the settings to match your application's requirements.

## Contributing

We welcome contributions to this open-source project. If you'd like to contribute, please follow our [Contributing Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).


## Screen shots

Find project screen shots in root/images. 

---


