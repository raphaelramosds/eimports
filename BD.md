# Banco de dados

<!-- ## Diagrama

O diagrama abaixo ilustra as entidades envolvidas na versão inicial do sistema

```mermaid

erDiagram
    usuario {
        int usuario_id PK
        string login
        string senha
    }

    vendedor {
        int vendedor_id PK
        string nome
        int usuario_id FK
    }

    vendedor ||--|| usuario : ""

    categoria {
        int categoria_id PK
        string nome
        int vendedor_id FK
    }

    vendedor ||--o{ categoria : ""
    vendedor ||--o{ cliente : ""

    produto {
        int produto_id PK
        string nome
        string descricao
        int estoque
        float cotacao

        int categoria_id FK
        int vendedor_id FK
    }

    produto }|--|| categoria : ""
    produto }o--|| vendedor : ""

    cliente {
        int cliente_id PK
        string telefone
        string nome
        int vendedor_id FK
    }

    ordem {
        int ordem_id PK
        string comprovante
        data compra
        data baixa
        int cliente_id FK
        int vendedor_id FK
    }

    ordem ||--|| cliente : ""
    ordem }o--|| vendedor : ""
    ordem  ||--}| produto_ordem : ""
    produto ||--}| produto_ordem : ""

    produto_ordem {
        int produto_id FK
        int ordem_id FK
        float preco
        int qtde
    }
``` -->


## Comentários

- O Modelo Entidade Relacionamento (MER) e o MR (Modelo Relacional) da versão inicial podem ser encontrados neste [diagrama](https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&page-id=gC0D3w3Kl2MFwOODHRUT&title=BD.drawio#R%3Cmxfile%20pages%3D%222%22%3E%3Cdiagram%20name%3D%22MER%22%20id%3D%22eeY8VesVYAR-1p0Vh_B3%22%3E7V1Ld5s6EP41XiaHlwAvEydtF7lt7untI6seBWSbFpALcmLn119hSwYkxyY2D6mnWeTAABMxM99oZjQiI3uSrN5ncDH%2FB4coHllGuBrZNyPLGjuA%2Fi4I6y0BmO6WMMuicEsySsLn6AVtiSanLqMQ5Yy2JRGMYxIt6sQApykKSI0Gsww%2F12%2Bb4jisERZwhiTC5wDGMvVbFJI5o5qGUV74gKLZnP1pH7ALCeQ3M0I%2BhyF%2BrpDs25E9yTAm26NkNUFxIbu6XN69cnU3sAylpMkDAH5E79GV%2FxwlAcon%2BN1%2Fi38vTH%2FL5gnGS%2FbGX%2FIlzCLMBk3WXBLP84igzwsYFOfPVNkj%2B3pOkpiemfQQxtEspccBHQ7KKCGGjyi%2BhsGvWYaXaTjBMabkmxSnlMG1PHr2Qk8oI2hVIbG3eY9wgki2prewq47JbIuZljlmkn6uKIrraV7RkcNokNnGbMe6FB89YBJ8gzQtW5IaCqk5sVP26htxoIKPQc9wRuZ4hlMY32G8YML8iQhZMzDAJcF1UaNVRL4Xj18CdvZQuXKzYpw3J2t%2BktIXrDxUnD5Ur5WPbc74c4e1OMUp4aQQTeEyJhsO4VUBvfI%2BSnkXFbLc8HxV9zleZgE6ZK5j5gJgNkOkgV0X4j9oSxmKIYme6mjfZxjs0Xsc0UGXNugZdRu0jUuj8iMw3L4g4yEY225Qp9sfF08FzTGeRalslXFMHWihGfVRbQ2OaqtXVJunYNrSGNRcwQOA%2Bjy7MCS05SidQ53QZhuS%2FxoabU6%2Fc%2BgpaPN0RhuPonVDG7ftEm0jy90Ia0kPZsUBZcBI9E%2FsqDrhEVjC7Dc4HoEvyU%2BrALZDJIGGSAKuUkjyHAlJpqTjYqx3hbUfQURh2hFNl6%2FYhSQKw3jjoVEevcDHDb9Czosi6N28CrgegZu9kj9ogCzDZyxHu7y6ObgujEvb4lo7M%2FC%2FEMLUC6%2FOAU%2BnOeokyHf3K4tPkCUcb0tqN9FpCd9jkK0BtsSvupB1DbUgK4eaKkOWm%2Bj5kDUu6Wxn16fEdvDr1uFrOn3hl9tgRZdfUQFOGkpoV3OzxmDg%2BMTuOV9QIGQ5JaE43WfyPOCoz%2BSG3XfNzQKCbW1H2lmVzZarbKNba%2BRfjfz9laKOnXKhcGa3trGxdULFiwsu4%2BPm0tClc5i1EoUZrut14NOtuln05dDBWNL6H%2BVuTncdPPE57jrGaoVbtoTwjwqHW9wA2wi3HGDWYXTRUrzFAyyOeIFDh%2FB0JWVmaBblJJMrtfkcLorDbI6Tx2VeKAVlER1BoUlOvS9Jby4gtRGCGfUQzPb3hGDWnhDM7SoE8w1JkD1mpHq7yKbVWE%2BtaiyPdDTxkNxCW4leHOB34yLHda69ZaRyZf0%2Bw2EBOOXzUXcs5AKD56OmFj0g9RUsU6uE1GroMk2lPKbsMFPKWbYVddemfL%2BONXt4rP2t%2FXQLNVtLqMnZW4jyIKMhhjyjKYw31xV6M%2FYF%2Bv3iDeiAt7d1Z6gFOEdLwMkLygEkaIazSKtmKE9s5mzaUGyDrgDn9gu4t8PN1BdrTdeC1cKavHqIcoJ%2FL%2FUKJV1hGdEcfGqzekXaSW0UNazplbM1XQhQC2ty5VhqOQxwGM2w7m2HvlBGse3B8egNNvOdhsfz25r6RaSnJSI9OdLEBGqW2Ilos7yh0eYejjP%2F9hQekl3j7StqIUkuSKq8gsMttJ3%2BE29c7z%2Fh1dlTV3B2C0H9dQHLHaEBDKG2q9rAETKCwVe1PXlrNDU%2BghIt5euKxfvB5evLxfuhK4eK9ATwbqijM4pvKzWl8HFXEPMpC1FygyY4WexxTMpFZmJ7Mxh887EjT9PBfmGeHvC2IDhxHynwBxfcnqJ0ITj8BOlrqyU9YKsmPSCb3SOMVopZnSvKzRlabp5cnv1DS0aWKPvhXaWcxHaTojYNJ6xWm2xOjyf4HKJbG7bT5dbjtyu01fL7GdpsukasmDaB3Bj3t4L0tnifz8qKaNTry%2BFqp1Gv6dqyYhj15K1MQ9WBj2j8sOZey%2BmPee1XNT5Af75QYuSpgrAbehd2HfnEmMRIjJ0dIDSxvLKLksodriu3sYpu4wE7vnFwXJ5jHLqfHmxH0Go11Zdb4FUuhnOYtlIMH3MjFPYdnGmofp1pb9u9fHnheNiPRSlSVPSb9vL6rW%2FjPq9M3GEScNKn9rTTp1pfH%2FLl7uwgjpByNTmpFDz412V9ubZEUIymhV0pJTpbaFx3weCikzu5Wt5904bF%2BQOKbX33Mn1I7vLk18sP%2FDS9v7m%2F2u1ZUjS%2F68P17hWL%2Bnt2Dw27goFFhoI2O6daAAEAwu520GNvFH74MEm%2F%2Fvi0%2BICTL9fjp%2BDn8vuF0mWrXsqQe8WiPggODbsCgt8kVGwiAEBIgTtcWqGn5b8g2OZg5f9xsG%2F%2FBw%3D%3D%3C%2Fdiagram%3E%3Cdiagram%20id%3D%22gC0D3w3Kl2MFwOODHRUT%22%20name%3D%22ER%22%3E7V1Ll5s2GP01Xk4O4s0ynskki%2FSVadqmmx6NUWxajBzAsZ1fX2FLGCSBEQZ7BrOZYwmNEJ%2Fu%2FV4SaGLcL7fvY7ha%2FIR9FE50zd9OjIeJrruuR%2F5mFbtDhenah4p5HPiHKnCseAp%2BIFqp0dp14KOk1DDFOEyDVblyhqMIzdJSHYxjvCk3%2B4rD8l1XcI6EiqcZDMXaPwM%2FXdBaoGnHCx9QMF%2FQW7sWvbCErDGtSBbQx5tClfFuYtzHGKeHX8vtPQoz2TG5HP7vseJqPrAYRWmTf%2Fjrn%2Ffp%2FZP%2B%2BPPUW3tuHHx6%2FIjvDDq47zBc0yemo013TAQo8t9mkiSlWQiTJJhNjOkiXYakApCfMV5HPsruopESGU28%2BysrvAGWzSq%2B7Cs8J6942BbbP%2ByKpV9RHCxRimJWuQ3SQ4%2BO6dFy1iF4o7HisbussCsUhM58Mr%2F04XCcLvAcRzB8d6ydHgSQtauUNK1K8Dqe5VJKf%2FvD%2BfLhlzl8ev%2FZ%2BvH3v1twZ7oUsjCeI%2Fq%2F0cf33xZeBNfPz4%2Bf1x8eF58TdOfkgCBEQpgMON6R%2F9scIcdwtSiAjdXFKIRp8L08XkiRP8%2B7y%2B%2FwKw7Ik%2BgaJanj0X4YRxkqWBeH56T%2FVYQY15FrljsyXK6jgxyEjgi84K7QbJU1SGoG7Lil%2B%2BiaVj8uRzurvWXXtzcdo649%2BXF4QlYqzPGxak9XOXXvPs3TKEo2X97uPA38%2FjP8I3m4A85p6s4JN1eV8KU6Ez6z5kwZoDhF20JTEZjsKuAEReVQwK3uWCJwbacaowWp1QpFyiNdps%2FskNx2%2Bkx%2BzLMfOPbR8p9VjP11itlVcre8gSBGIo20rPNgGMyjTCESmWaqZZrJLCBm4y29sAx8f69NYpQEP6iIM%2F1DsU36taYT6yHriwwjORi%2BrOskjfF%2F6B6HOFNZEY6yXr4GYchVidNaD5PGk1rG8p04pfmsF6eU1xndTSk4jXNiW1fZT4plIkMYp9SZyIROkJ7CINobAbAvhyFcJcFxWmaLIPQ%2Fwh1ep6wfVupP0sAqqyVHZI8tEbXZm6h1RVF%2FyryC6QLHwY9MwiEVJi%2F%2BZBMsQxgRRwn6XNUU%2B7v8v4rAD6IFsdyZ%2BFO8oi1C9DWlP59xmuIlLcRUNpp0av0Yr35nBliTk6nMyikR8L32xsr4qd%2BTMjiW95RdEc%2FhHkdkxDDYYwLBJN2gRI6WelifRsv18GBUatN1WZuSbo6KdF2pSBl4iHTSAIafMusTzfeULSjXzSJI0dMK7l2rDQkrDgwu2Ko6uGAi0a%2Fh3l1dECWMIvmMq6Fqjw8Uv%2FuODjABChOtt5lo1XmmnR0lqtwbDMkDRjAllCT%2BfCKAR81lkYvCPI0napdHRHWCqG15%2FgcPMEsA2CpGMzzCphVsgH4ruLEF3HxLfTTCph1sXBE2bqewadJbt7CRevxSe3bhEDxP1vDJm6LXCCQxuNOX1whkARsXg8%2FIvMxJ2AAHH3%2FnGGk8o3flABy4jcjUW%2FwtqsZKtXjV8Ftd0EAvM0cUNEsUXibcapDQG6PvbqJvuzFWroYGt1KLrgUtOkZLp1mlNNVOp%2B5Kk94u4OV6AqIi0ucIEiWQbMtTemKFrj1mmvR2AcywVH8BNES8PvJxvFc6I3bUsSMLqwcZHzVwHXsPj3RuqRiIss9Dpq7DI%2BmeAKdBeLRPqg8%2BNGrlhMkyRl3EPtK5sl%2FL2mNzUbKrZokWkqSBqffk7colrStKegx%2BmgQ%2F9ahWIt6F8TAuPSp5JvWkuqmlR7koxFTtDC9XMRyBogaU4a4oyiUjrig%2Bw2A7wqYdbGShz2vPtchFI8Y%2Be32Dv0Mi7RE97dDjieh57YGzXDTiUsAsDLKA7gaTLh2BR5ayG6bqEfO8N5yy6wg9hjk81SN9I0jtrQJBgNU5OyG91zhnZ0mYC7yetjTI3%2BNp8JrUpfNAtbPXdgu6JA8EVGF%2BnqRVM25jHqh1HihHtVJ64MJ4kOUFuTxQybqNqaB6Xt3UMrhcFGJq8RbXwc%2BFyXAXwuWSEROI62QN4wCPTnVb7Axxf7lcNGIWUVjzZVZsSMu%2BZ%2FqoF9jyKh2hbOvdlWMgR%2FJy6GVjIMm7NQKGqUYcPITdiplXdqZ627nQ5MMeLyJibS7KFxqxGmPEerGI1XgFEavRIGIteo5jwFpPq3HvgiEGrCGeB9GIEzWc3NjWBUOMWBMULcatC%2B1gM8RgVeqRAZmjf%2BXwx%2FQE2Ztsi%2BBFoh9LXFQVop8BflKqHiAvN%2FwxVd%2BlvFb4oyBLdrX8erBs57ZqAvY8UTfIlozxTzfxj9kqd3ZhPFRryvEjPwpT3SrH9NodErntFXNZ44KdOkxuLPyxxLycj5JZTFyqm%2FseVEfQGWIIJMeOmMMjdhp%2FW49KpyVyJJ%2BEGiZyxFzdDKdw1DltkaNLNt4OEzmSN9RK33cZ4dMCPoYmwmeQu9osMWs37vo%2FGz2S3W2D3PXfYA2795Qv9yFDQ%2FYhQxnZejtMAFS%2Fg378kOHhtazh53wbU%2BcC3%2BqQz1aDj3G%2BjJSvqhbiDtm4%2BjEBTRaIxoyvcsa3HtUv%2BJgAIPvOE%2F%2BpwsLrq2PGt55WN5XxlYtCXL5LERF%2FNiMjVJSgMtysr1wy4mrkLa4VdISaISZ85aIZ35nvAT0DPAdA6tFLX43gIFM4RZPOXPURmiePqETHQzY9V58UDtkEb7S8rHLG5t4XZwN8DvHsP1b5GIRsmOQZaEnLcdPNOZnsaNfCOZk1KZxah6jHgzJdrRyJWfx2s8YHZVpcRzrXUUcHZZqOU7qPTQlTOS7XqGs%2FOfcgSzl7GnwmtsAeBs5q%2BuTHxXqmPTkeF5udP%2BtMuj8v9sgK0C0r2FdKTrPidJjQ5%2FGxXH6i9fGxjl3uqK%2FjY13DK6PcqWeF6YG69j2xosEOxpassCalM5T1Pg5R7oIUtW7ICycF05y5hufdksak4M%2F38fohhe1ypuLEmceWZta174kUDfaaKpFCxdMCusl5WkYrV6vARMPh7JOrTsW%2BiOa8Dp4ZJzyppjzLfTmG5754pnvcgPXacYkPqNaePUelcbOtuvY98Vi2R7iax7MQJkkwq2VygafA5Xhqeufx1DHMMk9toweT2Y67jT3HmuWFq5HX42yb1tZImpznaPVDXoeL29g30SvJ5YC69v2Qq8kL6e3JZfNG0HTOI5drcEFaCxt4SW41zlUY1zWMehmqTtuozOYNY09RmeVxuQfPVTR0au1d4xR3jbr2PXFX75y7OdE0x%2BKI1iLwK2gCo6gIMue1lR4oUBeFz3hzbYt4EPi1WGtyKRDQNmy0OEul86a1I9YC7j7GRSycbGNWVxbOsABn4cCZFk5zQTnjYupnmbg%2BecL2SL5wnlhcJl5Y9WnLE9BT2GeY8vu05AkpxhinxeYxXC1%2Bwj7KWvwP%3C%2Fdiagram%3E%3C%2Fmxfile%3E)

- A ordem de compra pode conter mais de um produto, e um produto pode estar em várias ordens de compra. Além disso, o preço do produto cadastrado pelo vendedor na ordem de compra pode não ser a cotação que está registrada no produto, pois esse valor pode ser negociado. Então, a tabela de cruzamento `produto_ordem` foi criada para conter o preço que o produto foi vendido.

- O atributo `vendedor_id` está presente em tabelas como `categoria`, `cliente` e `ordem` porque, pensando em um sistema com vários usuários, um vendedor não pode ver as categorias, clientes e ordens de compra cadastradas pelos outros vendedores.
