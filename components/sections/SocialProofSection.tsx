'use client';

import { Container, Title, Text, SimpleGrid, Box, Paper, Group } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';

export function SocialProofSection() {
    return (
        <Box component="section" id="social-proof" py={{ base: 60, md: 80 }} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <Container size="lg">
                <Title
                    order={3}
                    ta="center"
                    mb={60}
                    c="dimmed"
                    style={{ fontFamily: 'Pretendard, sans-serif', letterSpacing: 1, fontSize: '1rem', textTransform: 'uppercase' }}
                >
                    Trusted Partners & Ecosystem
                </Title>

                <SimpleGrid cols={{ base: 2, md: 4 }} spacing={40} verticalSpacing={40}>
                    {['GOVT SUPPORT', 'PARTNER NETWORK', 'GLOBAL LOGISTICS', 'AMAZON SPN'].map((text, i) => (
                        <Box key={i} style={{ opacity: 0.5, filter: 'grayscale(100%)' }} ta="center">
                            <Text fw={700} size="xl" c="dimmed">{text}</Text>
                        </Box>
                    ))}
                </SimpleGrid>

                <Group justify="center" gap="xl" mt={60}>
                    <Group gap="xs" style={{ opacity: 0.7 }}>
                        <IconCheck size={18} color="#ccff00" />
                        <Text size="sm" c="dimmed">부담 없는 무료 상담</Text>
                    </Group>
                    <Group gap="xs" style={{ opacity: 0.7 }}>
                        <IconCheck size={18} color="#ccff00" />
                        <Text size="sm" c="dimmed">언제든 취소 가능</Text>
                    </Group>
                </Group>
            </Container>
        </Box>
    );
}
