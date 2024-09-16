# Local Instance Instructions

## General

1. Open Visual Studio Code
2. Open a new terminal, and clone this repository using the following command. If/when prompted, open the cloned repository:

```bash
git clone https://github.com/mq022002/Blond-Maggots-Sandbox-Monorepo.git
```

3. Once the repository is cloned, you should be in this folder:

- Blond-Maggots-Sandbox-Monorepo
- If you are not already within the Blond-Maggots-Sandbox-Monorepo folder, you need to navigate to it to ensure you are in the correct directories for the following steps. This can be done either by opening the folder through Visual Studio Code, OR changing your directory within the terminal like so:
  `cd [directory you want to navigate to in relation to current directory]`

## Python

1. Within the root of the project, being `Blond-Maggots-Sandbox-Monorepo/``, create and activate a virtual environment:

```bash
# Linux
sudo apt-get install python3-venv    # If needed
python3 -m venv .venv
source .venv/bin/activate

# macOS
python3 -m venv .venv
source .venv/bin/activate

# Windows
python -3 -m venv .venv
.venv\scripts\activate
```

Note: What is a virtual environment? This essentially allows you scope dependencies to a specific project, instead of having them installed globally. Why do we do that? Because some projects require specific versions of libraries.

2. Ensure that your virtual environment is activated. You can check this by looking at your terminal and noticing the name of the virtual environemt (.venv in this case) before the command line.

3. Install your dependencies using the following command:

```bash
pip install -r requirements.txt
```

4. To ensure that everything is working just fine, run get_plants inside of the Python folder, and it should boot up a Flask server with an exposed endpoint for a local database included with this project, being db.sqlite3.

## React/Next.js

1. From the root of the project, navigate to the web folder. Assuming you are in the root, you can use this command:

```bash
cd apps/web
```

2. Install your dependencies using the following command:

```bash
npm i
```

3. Ensure that you are still within `Blond-Maggots-Sandbox-Monorepo/apps/web`, and now, boot up the development using the following command:

```bash
npm run dev
```
