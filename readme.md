# Nodll - A Node.js Tool for Dynamic Loading of .NET DLLs

Nodll is a handy command-line tool written in Node.js that simplifies the dynamic loading of .NET DLLs for rapid development and testing. With Nodll, you can effortlessly load .NET DLLs into your Node.js environment and interact with their methods using a familiar REPL interface.

## Features

- **Simple Usage**: Just provide the path to the DLL you want to load, and Nodll takes care of the rest.
- **Dynamic Loading**: Nodll dynamically loads .NET DLLs at runtime, allowing you to experiment with different libraries without restarting your Node.js application.
- **Error Handling**: Easily identify DLLs that fail to load and troubleshoot any issues.
- **Interactive REPL**: After loading DLLs, Nodll provides an interactive REPL environment where you can explore available methods and interact with them in real-time.

## Installation

Before using Nodll, ensure you have Node.js installed on your system. Then, simply install Nodll via npm:

```bash
npm install -g nodll
```

## Usage

To use Nodll, run the following command in your terminal:

```bash
nodll **/**
```

Replace `**/**` with the path to the directory containing the .NET DLLs you want to load. Nodll will load all DLLs found in the specified directory and its subdirectories.

## Example

Suppose you have a directory named `my_dlls` containing several .NET DLLs. To load these DLLs using Nodll, run:

```bash
nodll my_dlls
nodll */*
nodll **/**
```

Nodll will attempt to load each DLL and display the outcome (OK or KO) for each file. After loading, you can interact with the loaded DLLs in the REPL environment.

## Contributing

Contributions to Nodll are welcome! If you encounter any issues or have suggestions for improvement, please feel free to open an issue or submit a pull request on [GitHub](https://github.com/agebrock/nodll).

## License

Nodll is licensed under the MIT License. See the [LICENSE](https://github.com/agebrock/nodll/blob/main/LICENSE) file for details.

## Disclaimer

Nodll is provided as-is without any warranty. Use it at your own risk.

---

**Start loading .NET DLLs with ease today!** 🚀