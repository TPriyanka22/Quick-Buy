import React, { useState } from 'react';
import addressCardStyles from './quickbuy-address-card.module.scss';
import QuickbuyUpdateAddressModal from './quickbuy-update-address';
import { deleteAddress } from '@/firebase/addresses';
export default function QuickbuyAddressCard({ addressData }) {
    const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
    const { id, title, fullAddress, zipcode, region, city } = addressData;
    return (
        <div className={addressCardStyles.quickbuyAddressCard}>
            <div className={addressCardStyles.quickbuyCardHeader}>
                <h4>{title || 'Address Title'}</h4>
            </div>
            <hr />
            <div className={addressCardStyles.quickbuyAddressDetails}>
                <p>{fullAddress || 'Full Address'}</p>
                <p>{region || 'Region'}</p>
            </div>
            <div className={addressCardStyles.quickbuyActionButtons}>
                <button
                    className={addressCardStyles.quickbuyDeleteButton}
                    onClick={() => deleteAddress({ id })}
                >
                    Delete Address
                </button>
                <button
                    className={addressCardStyles.quickbuyUpdateButton}
                    onClick={() => setUpdateModalOpen(true)}
                >
                    Update Address
                </button>
            </div>
            {isUpdateModalOpen && (
                <QuickbuyUpdateAddressModal
                    addressData={addressData}
                    closeEvent={() => setUpdateModalOpen(false)}
                />
            )}
        </div>
    );
}