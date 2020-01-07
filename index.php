<?php

require_once 'vendor/autoload.php';

$loader = new \Twig\Loader\FilesystemLoader('layouts');
$twig = new \Twig\Environment($loader);

$data = [
    'page_title' => 'Produto Secreto - Xtech Commerce',
    'shop_title' => 'Loja Secreta',
    'categories' => [
        ['name' => 'Produtos Secretos'],
        ['name' => 'Outros Produtos'],
        ['name' => 'Promoção Maluca'],
    ],
    'product' => [
        'name' => 'Produto Secreto',
        'description' => 'Esse é um produto secreto que vai melhorar muito sua vida.',
        'sku' => 'MO9394',
        'options' => [
            ['name' => '300g', 'price' => 'R$ 20,00'],
            ['name' => '1kg', 'price' => 'R$ 58,00'],
        ],
    ],
    'footer' => [
        'left' => [
            'name' => 'Institucional',
            'links' => ['Noticias', 'Quem Somos', 'Contato'],
        ],
        'middle' => [
            'name' => 'Ajuda & Suporte',
            'links' => ['Como Comprar', 'Termos e Condições'],
        ],
        'right' => [
            'name' => 'Redes Sociais',
            'links' => ['Facebook', 'Twitter', 'Instagram'],
        ],
    ],
];

echo $twig->render('index.html', $data);
