import React from 'react'
import NextHead from 'next/head'

export const Head: React.FC = () => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>Маркет</title>
    <meta name="keywords" content="" />
    <meta
      name="description"
      content="Пример магазина для тестирования модуля создания рекламных объявлений"
    />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link rel="icon" sizes="192x192" href="/touch-icon.png" />
    <link rel="apple-touch-icon" href="/touch-icon.png" />
    <link rel="mask-icon" href="/favicon-mask.svg" color="#49B882" />
    <link rel="icon" href="/favicon.png" />
    <meta property="og:image" content="/favicon.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="yandex-verification" content="1b46776c88d34ab0" />
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap&subset=cyrillic,cyrillic-ext,latin-ext"
      rel="stylesheet"
    />
  </NextHead>
)
