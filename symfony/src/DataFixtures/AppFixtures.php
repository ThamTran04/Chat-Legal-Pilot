<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AppFixtures extends Fixture
{
    public function __construct(UserPasswordHasherInterface $userPasswordEncoder)
    {
        $this->userPasswordEncoder = $userPasswordEncoder;
    }

    private function _createUser(
        ObjectManager $manager,
        string $nom,
        string $prenom,
        string $email,
        array $roles,
        string $agent
    ): void {
        $user = new User();
        $user->setNom($nom)
            ->setPrenom($prenom)
            ->setEmail($email)
            ->setPassword($this->userPasswordEncoder->hashPassword($user, "1234"))
            ->setAgent($agent)
            ->setRoles($roles);
        $manager->persist($user);
    }

    public function load(ObjectManager $manager): void
    {
        // creating an admin
        $this->_createUser($manager, "Henry", "Erwan", "admin@gmail.com", ["admin", "Senior"], "Sophia");

        // creating others users
        for ($i = 1; $i <= 3; $i++) {
            $this->_createUser($manager, "nom$i", "prenom$i", "user$i@gmail.fr", ["Junior"], "Aix");
        }

        $manager->flush();
    }
}
