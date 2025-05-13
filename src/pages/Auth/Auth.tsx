import styles from './Auth.module.scss'
import { Form } from '../../features/components/Form/Form'
import type { FC } from 'react'

export const Auth: FC = () => {

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Форма Авторизации</h1>
            <Form />
        </div>
    )
}


