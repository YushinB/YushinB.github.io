---
layout: single
title: "Rust in Action notes"
date: 2025-11-16
categories: [Rust, Backend]
tags: [Programing language, Rust, Backend, AWS, C]
excerpt: "These are my notes about the Rust In Action book written by Timothy Samuel Mcnamara. I hope you find them useful."
header:
  teaser: /assets/images/500x300.jpg
  overlay_color: "#000"
  overlay_filter: "0.2"
  overlay_image: /assets/images/Articles.jpg
author_profile: true
---

# What is Rust programing language

Rust is a modern, compiled, multi-paradigm systems programming language known for its emphasis on safety, performance, and concurrency. It is often seen as a safer alternative to C and C++ for systems-level development. 


# Why Rust?


- Performance: Rust is blazingly fast and memory-efficient: with no runtime or garbage collector, it can power performance-critical services, run on embedded devices, and easily integrate with other languages.
- Reliability: Rust’s rich type system and ownership model guarantee memory-safety and thread-safety — enabling you to eliminate many classes of bugs at compile-time.
- Productivity: Rust has great documentation, a friendly compiler with useful error messages, and top-notch tooling — an integrated package manager and build tool, smart multi-editor support with auto-completion and type inspections, an auto-formatter, and more.

# Hello world

Let’s jump right into our first example to understand how Rust works.

```shell
cargo new hello
cd hello
cargo run
```

<figure class="figure">
  <img src="/assets/images/RUST_RUNNING.png" alt="Rust running" class="img-responsive" />
  <figcaption class="figure-caption">Centered image with caption</figcaption>
</figure>

Below is the folder structure of rust project

```text
$ tree --dirsfirst hello
hello
├── src
│   └── main.rs
├── target
│   └── debug
│       ├── build
│       ├── deps
│       ├── examples
│       ├── native
│       └── hello
├── Cargo.lock
└── Cargo.toml
```

