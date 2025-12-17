'use client';

import { Container, Group, Burger, Button, Text, Box, Drawer, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export function Header() {
    const [opened, { toggle }] = useDisclosure(false);

    return (
        <Box
            component="header"
            py="md"
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 100,
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                backgroundColor: 'rgba(26, 26, 26, 0.75)', // Slightly higher opacity for better fallback
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)', // Safari support verified
            }}
        >
            <Container size="xl">
                <Group justify="space-between" h="100%">
                    <Text component="a" href="/" fw={900} size="xl" c="white" style={{ fontFamily: 'Outfit, sans-serif', cursor: 'pointer', textDecoration: 'none' }}>
                        Multiplez
                    </Text>

                    <Group gap="xl" visibleFrom="sm">
                        <Text component="a" href="#solution" size="sm" fw={500} c="dimmed" style={{ cursor: 'pointer' }}>
                            솔루션
                        </Text>
                        <Text component="a" href="#why-us" size="sm" fw={500} c="dimmed" style={{ cursor: 'pointer' }}>
                            차별점
                        </Text>

                        <Text component="a" href="#pricing" size="sm" fw={500} c="dimmed" style={{ cursor: 'pointer' }}>
                            가격
                        </Text>
                    </Group>

                    <Group visibleFrom="sm">
                        <Button
                            component="a"
                            href="https://calendar.app.google/i8KX8FBx8tonpQmb7"
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="filled"
                            color="brand.5"
                            c="navy.9"
                            radius="xl"
                            fw={700}
                        >
                            무료 상담 신청
                        </Button>
                    </Group>

                    <Burger
                        opened={opened}
                        onClick={toggle}
                        hiddenFrom="sm"
                        size="sm"
                        aria-label="Toggle navigation menu"
                        style={{ position: 'relative', zIndex: 101 }}
                    />

                    <Drawer
                        opened={opened}
                        onClose={toggle}
                        size="100%"
                        padding="md"
                        title="Menu"
                        hiddenFrom="sm"
                        zIndex={300}
                    >
                        <Stack gap="lg">
                            <Text component="a" href="#solution" size="lg" fw={500} onClick={toggle}>
                                솔루션
                            </Text>
                            <Text component="a" href="#why-us" size="lg" fw={500} onClick={toggle}>
                                차별점
                            </Text>

                            <Text component="a" href="#pricing" size="lg" fw={500} onClick={toggle}>
                                가격
                            </Text>
                            <Button
                                component="a"
                                href="https://calendar.app.google/i8KX8FBx8tonpQmb7"
                                target="_blank"
                                rel="noopener noreferrer"
                                fullWidth
                                variant="filled"
                                color="brand.5"
                                c="navy.9"
                                radius="xl"
                                fw={700}
                                onClick={toggle}
                            >
                                무료 상담 신청
                            </Button>
                        </Stack>
                    </Drawer>
                </Group>
            </Container>
        </Box>
    );
}
