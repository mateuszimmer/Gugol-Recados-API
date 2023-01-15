import { Router, Request, Response } from 'express'
import { addUser } from '../functions/addUser';
import { alteraRecado } from '../functions/alteraRecado';
import { cadastraRecado } from '../functions/cadastraRecado';
import { getUser } from '../functions/getUser';
import { getUserRecados } from '../functions/getUserRecados';
import { removeUserArrayUsuariosLogados } from '../functions/removeUserArrayUsuariosLogados';
import { verificaUsuarioLogado } from '../functions/verificaUsuarioLogado';
import { checkEmailESenha } from '../middlewares/checkEmailESenha';
import { checkInfosCadastro } from '../middlewares/checkInfosCadastro';
import { checkRecadoExiste } from '../middlewares/checkRecadoExiste';
import { checkUsuarioLogado } from '../middlewares/checkUsuarioLogado';
import { storeRecados, storeUsuarios, storeUsuariosLogados } from '../store';

export const router = Router();

// Usuarios
router.get('/', (req: Request, res: Response) => {
    return res.send('Gugol Recados API')
})
router.post('/cadastro',[ checkInfosCadastro, checkEmailESenha ], (req: Request, res: Response) => {
    addUser(req, res)
    console.table(storeUsuarios)    
})

router.post('/logar', [ checkEmailESenha ], (req: Request, res: Response) => {
    getUser(req, res)
})

router.delete('/logout/:id', (req: Request, res: Response) => {
    removeUserArrayUsuariosLogados(req, res)
})

router.get('/usuarioLogado/:id', (req: Request, res: Response) => {
    verificaUsuarioLogado(req, res)
})

// Recados
router.get('/recados/:id',[ checkUsuarioLogado ], (req: Request, res: Response) => {
    getUserRecados(req, res)
})

router.post('/recados/novorecado', [ checkUsuarioLogado ], (req: Request, res: Response) => {
    cadastraRecado(req, res)
})

router.put('/recados', [ checkUsuarioLogado, checkRecadoExiste ], (req: Request, res: Response ) => {
    alteraRecado(req, res)
})


// Rotas para carregar todas informações
router.get('/todosrecados', (req: Request, res: Response) => {
    return res.status(200).send({
        dados: storeRecados
    })
})

router.get('/todosusuarios', (req: Request, res: Response) => {
    return res.status(200).send({
        dados: storeUsuarios
    })
})

router.get('/todosusuarioslogados', (req: Request, res: Response) => {
    return res.status(200).send({
        dados: storeUsuariosLogados
    })
})