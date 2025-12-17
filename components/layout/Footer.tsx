'use client';

import { Container, Group, Text, Box } from '@mantine/core';

export function Footer() {
    return (
        <Box component="footer" py="xl" bg="dark.9" style={{ borderTop: '1px solid #333' }}>
            <Container size="xl">
                <Group justify="space-between">
                    <Text fw={700} size="lg" c="dimmed">Multiplez</Text>
                    <Group>
                        <Text size="sm" c="dimmed">© 2025 Multiplez. All rights reserved.</Text>
                    </Group>
                </Group>
            </Container>
        </Box>
    );
}
