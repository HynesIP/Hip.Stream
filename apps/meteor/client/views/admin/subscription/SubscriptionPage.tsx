import { Box, Icon, Callout } from '@rocket.chat/fuselage';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Page, PageScrollableContentWithShadow } from '../../../components/Page';
import PageHeaderNoShadow from '../../../components/Page/PageHeaderNoShadow';

const SubscriptionPage = () => {
	const { t } = useTranslation();

	return (
		<Page background='tint'>
			<PageHeaderNoShadow title={t('Subscription')} />
			<PageScrollableContentWithShadow>
				<Box maxWidth='x600' w='full' alignSelf='center' mb={24}>
					<Callout type='success' title='FOSS Build'>
						<Box>
							This is a Free and Open Source Software (FOSS) build of Hip.Stream.
							All features are available without license restrictions or payments.
						</Box>
						<Box mbs={8}>
							<Icon name='check' size='x20' /> No subscription required
						</Box>
						<Box mbs={8}>
							<Icon name='check' size='x20' /> No user limits
						</Box>
						<Box mbs={8}>
							<Icon name='check' size='x20' /> All features unlocked
						</Box>
					</Callout>
				</Box>
			</PageScrollableContentWithShadow>
		</Page>
	);
};

export default memo(SubscriptionPage);
