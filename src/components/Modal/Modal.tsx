import Button from 'react-bootstrap/Button';
import { Modal as BSModal, ModalProps as BSModalProps } from 'react-bootstrap';
import { ReactNode } from 'react';
import styles from './Modal.module.scss';

type ModalProps = {
    show: boolean;
    onClose: () => void;
    title?: string | ReactNode;
    body?: string | ReactNode;
    footer?: string | HTMLElement;
    fullscreen?: true;
} & BSModalProps;

export const Modal = ({
    body,
    footer,
    fullscreen,
    onClose,
    show,
    title,
    ...props
}: ModalProps) => {
    return (
        <BSModal
            contentClassName={styles.content}
            show={show}
            onHide={onClose}
            className={styles.customModal}
            fullscreen={fullscreen}
            {...props}>
            <BSModal.Header closeButton className={styles.header}>
                {title && <BSModal.Title>{title}</BSModal.Title>}
            </BSModal.Header>
            <BSModal.Body>{body}</BSModal.Body>
            {footer && (
                <BSModal.Footer>
                    <Button variant='secondary' onClick={onClose}>
                        Close
                    </Button>
                    <Button variant='primary' onClick={onClose}>
                        Save Changes
                    </Button>
                </BSModal.Footer>
            )}
        </BSModal>
    );
};
