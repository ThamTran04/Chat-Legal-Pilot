<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class SecurityController extends AbstractController
{

    #[Route("/api/v1/login", name: "api_login", methods: ["POST"])]
    public function login()
    {
        // $user = $this->getUser();

        // return $this->json(
        //     [
        //         'username' => $user->getUserIdentifier(),
        //         'roles' => $user->getRoles()
        //     ]
        // );
    }
}
