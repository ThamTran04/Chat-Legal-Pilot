<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\UserRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=UserRepository::class)
 * @ORM\Table(name="`users`")
 */

#[ApiResource(
    normalizationContext: ['groups' => ['user:read']],
    denormalizationContext: ['groups' => ['user:write']],
    collectionOperations: [
        "get" => [],
        "post" => [],
        "check_gmail_user" => [
            'path' => '/users/email',
            'method' => 'get',
            'controller' => CheckGmailUser::class,
        ],
        "create_user" => [
            'path' => '/users/create',
            'method' => 'post',
            'controller' => CreateUser::class,
        ]
    ],
    itemOperations: [
        "get" => [],
        "enabled_user" => [
            'path' => '/users/{id}/enabled',
            'method' => 'get',
            'controller' => EnabledUser::class,
        ],
        "put" => [],
        "delete" => []
    ]
)]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    #[Groups(['user:read'])]
    private $id;

    /**
     * @ORM\Column(type="string", length=180, unique=true)
     */
    #[Groups(['user:read', 'user:write'])]
    private $email;

    /**
     * @ORM\Column(type="json")
     */
    #[Groups(['user:read', 'user:write'])]
    private $roles = [];

    /**
     * @var string The hashed password
     * @ORM\Column(type="string")
     */
    #[Groups(['user:write'])]
    private $password;

    /**
     * @ORM\Column(type="string", length=255)
     */
    #[Groups(['user:read', 'user:write'])]
    private $nom;

    /**
     * @ORM\Column(type="string", length=255)
     */
    #[Groups(['user:read', 'user:write'])]
    private $prenom;

    /**
     * @ORM\Column(type="string", length=255)
     */
    #[Groups(['user:read', 'user:write'])]
    private $agent;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @deprecated since Symfony 5.3, use getUserIdentifier instead
     */
    public function getUsername(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * Returning a salt is only needed, if you are not using a modern
     * hashing algorithm (e.g. bcrypt or sodium) in your security.yaml.
     *
     * @see UserInterface
     */
    public function getSalt(): ?string
    {
        return null;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }

    public function getPrenom(): ?string
    {
        return $this->prenom;
    }

    public function setPrenom(string $prenom): self
    {
        $this->prenom = $prenom;

        return $this;
    }

    public function getAgent(): ?string
    {
        return $this->agent;
    }

    public function setAgent(string $agent): self
    {
        $this->agent = $agent;

        return $this;
    }
}
