package org.mengyun.tcctransaction;

public class IllegalTransactionStatusException extends RuntimeException {
    private static final long serialVersionUID = -6288775445967150668L;

    public IllegalTransactionStatusException(String message) {
        super(message);
    }

}
