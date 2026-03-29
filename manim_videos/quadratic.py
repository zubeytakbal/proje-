from manim import *

class QuadraticSolution(Scene):
    def construct(self):
        # Arka plan rengi
        self.camera.background_color = "#1a1a2e"

        # Başlık
        title = Text("Solve for x", font_size=40, color=YELLOW)
        title.to_edge(UP, buff=0.5)
        self.play(Write(title))
        self.wait(0.5)

        # Denklem
        eq = MathTex(r"x^2 - 5x + 6 = 0", font_size=60, color=WHITE)
        eq.move_to(UP * 1.5)
        self.play(Write(eq))
        self.wait(1)

        # Adım 1: Çarpanlara ayırma
        step1_label = Text("Factor:", font_size=32, color=BLUE_B)
        step1_label.move_to(LEFT * 4 + UP * 0.3)
        step1 = MathTex(r"(x - 2)(x - 3) = 0", font_size=54, color=WHITE)
        step1.move_to(UP * 0.3)

        self.play(Write(step1_label))
        self.play(TransformMatchingTex(eq.copy(), step1))
        self.wait(1)

        # Adım 2: Çözümler
        step2_label = Text("Solutions:", font_size=32, color=GREEN)
        step2_label.move_to(LEFT * 3.8 + DOWN * 1.0)

        sol1 = MathTex(r"x = 2", font_size=54, color=GREEN)
        sol2 = MathTex(r"x = 3", font_size=54, color=GREEN)
        sol1.move_to(LEFT * 1.5 + DOWN * 1.0)
        sol2.move_to(RIGHT * 1.5 + DOWN * 1.0)

        self.play(Write(step2_label))
        self.play(Write(sol1), Write(sol2))
        self.wait(1)

        # Çerçeve içine al
        box1 = SurroundingRectangle(sol1, color=GREEN, buff=0.2)
        box2 = SurroundingRectangle(sol2, color=GREEN, buff=0.2)
        self.play(Create(box1), Create(box2))
        self.wait(2)

        # Kapanış
        end = Text("✓ Solved!", font_size=42, color=YELLOW)
        end.move_to(DOWN * 2.2)
        self.play(Write(end))
        self.wait(2)
